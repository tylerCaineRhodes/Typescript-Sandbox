import faker from 'faker';
import { Mappable } from './CustomMap' 

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number
  }
  color: string = 'blue';
  
  constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();

    this.location = {
      lat: parseInt(faker.address.latitude()),
      lng: parseInt(faker.address.latitude())
    }
  }

  markerContent = ():string => {
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h1>
      <h3>catchphrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
