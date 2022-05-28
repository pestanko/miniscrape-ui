export interface UserProfile {
    category: string | undefined;
}


export class ProfileService {
    private storage: Storage;
    
    constructor(storage: Storage) {
        this.storage = storage;
    }

    public storeProfile(profile: UserProfile) {
        this.storage.setItem("user_profile", JSON.stringify(profile));
    }

    public loadProfile(): UserProfile {
        const rawProfile = this.storage.getItem("user_profile");
        if(!rawProfile) {
            return {} as UserProfile;
        }
        return JSON.parse(rawProfile) as UserProfile;
    }
}