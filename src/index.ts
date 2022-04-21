
const styles = `font-weight:bold; font-size:16px;`

export class Log{
    static success(msg: string) {
        console.log(`%c ${msg}`, `color:#00B74A;${styles}`);
    }

    static error(msg: string) {
        console.log(`%c ${msg}`, `color:#F93154;${styles}`);
    }

    static info(msg: string) {
        console.log(`%c ${msg}`, `color:#39C0ED;${styles}`);
    }

    static warn(msg: string) {
        console.log(`%c ${msg}`, `color:#FFA900;${styles}`);
    }
}

