export class Quote {
    public showDescription:boolean;
    constructor( 
        public author:string,
        public quote: string,
        public description: string
        ){
        this.showDescription = false;  
        }
}
