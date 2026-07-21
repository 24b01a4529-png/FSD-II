class College {
    readonly collegeName: string = "Shri Vishnu Engineering College";
    static university: string = "JNTUK";

    display(): void {
        console.log("College:", this.collegeName);
        console.log("University:", College.university);
    }
}

let c = new College();
c.display();