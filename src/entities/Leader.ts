
export interface ILeader {
  name: string;
  abbr: string;
  image: string;
  description: string;
  designation: string;
  features: Boolean;
}

class Leader implements ILeader {
  public name: string;
  public abbr: string;
  public image: string;
  public description: string;
  public designation: string;
  public features: Boolean;

  
  constructor(
    nameOrLeader: string | ILeader,
    abbr: string,
    image: string,
    description: string,
    designation: string,
    features: Boolean
  ) {
      if (typeof nameOrLeader === 'string') {
        this.name = nameOrLeader;
        this.abbr = abbr;
        this.image = image;
        this.description = description;
        this.designation = designation;
        this.features = features;
      } else {
        this.name = nameOrLeader.name;
        this.abbr = nameOrLeader.abbr;
        this.image = nameOrLeader.image;
        this.description = nameOrLeader.description;
        this.designation = nameOrLeader.designation;
        this.features = nameOrLeader.features;
      }
    
  }
}

// export default Leader;