export class Quote {
    public showDescription: boolean;
    public vote: number;
    public maxCount = 0;
    constructor(
        public author: string,
        public quote: string,
        public description: string,
        public completeDate: Date,
        ) {
        this.showDescription = false;
        }
}
