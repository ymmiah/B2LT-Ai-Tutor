
import { UserProgressData } from '../types';
import { upgradeProgressData } from '../utils/progressUtils';

const DELAY_MS = 400; // Simulate network latency for realism
const delay = () => new Promise(resolve => setTimeout(resolve, DELAY_MS));

export const storageService = {
    async getUsers(): Promise<string[]> {
        await delay();
        const users = localStorage.getItem('userEmails');
        return users ? JSON.parse(users) : [];
    },

    async saveUserList(users: string[]): Promise<void> {
        // Internal use mostly
        localStorage.setItem('userEmails', JSON.stringify(users));
    },

    async registerUser(email: string): Promise<void> {
         const users = await this.getUsers();
         if (!users.includes(email)) {
             users.push(email);
             await this.saveUserList(users);
         }
    },

    async loadProgress(email: string): Promise<UserProgressData> {
        await delay();
        const saved = localStorage.getItem(`progress_${email}`);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                return upgradeProgressData(parsed);
            } catch (e) {
                console.error("Failed to parse progress", e);
            }
        }
        // Return a fresh user structure if not found
        return upgradeProgressData({ email }); 
    },

    async saveProgress(progress: UserProgressData): Promise<void> {
        await delay();
        // Save the specific user progress
        localStorage.setItem(`progress_${progress.email}`, JSON.stringify(progress));
        // Ensure user is in the known users list
        await this.registerUser(progress.email);
    },

    exportData(progress: UserProgressData) {
        const dataStr = JSON.stringify(progress, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `uk_prep_ai_backup_${progress.email.replace(/[^a-z0-9]/gi, '_')}_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },

    async importData(file: File): Promise<UserProgressData> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const result = e.target?.result as string;
                    const parsed = JSON.parse(result);
                    
                    // Basic validation
                    if (!parsed.email || !Array.isArray(parsed.testHistory)) {
                        throw new Error("Invalid backup file format");
                    }

                    const upgraded = upgradeProgressData(parsed);
                    resolve(upgraded);
                } catch (err) {
                    reject(err);
                }
            };
            reader.onerror = () => reject(new Error("Failed to read file"));
            reader.readAsText(file);
        });
    }
};
