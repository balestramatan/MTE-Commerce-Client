class SessionUtils {
    static setItem(name: string, val: any) {
        localStorage.setItem(name, val);
    }

    static getItem(name: string) {
        return localStorage.getItem(name);
    }

    static removeItem(name: string) {
        localStorage.removeItem(name);
    }
}

export default SessionUtils;
