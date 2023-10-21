import {
  PropertyType,
  Property,
} from "@properties/domain/models";
import { fromLocationDocToDomain } from "./locationDto"
import { DocumentData } from "firebase/firestore";

function getDocPropertyType(rawPropertyType: string): PropertyType {
  switch(rawPropertyType) {
    case("APARTMENT"):
      return PropertyType.Apartment
    case("HOUSE"):
      return PropertyType.House
    default:
      return PropertyType.Office
  }
}


export function fromPropertyDocListToDomainList(
  docList: DocumentData[]
): Property[] {
  return docList.map(doc => new Property(
    doc.price,
    doc.rooms,
    doc.baths,
    doc.area,
    doc.description,
    doc.elevator,
    fromLocationDocToDomain(doc.location),
    getDocPropertyType(doc.type),
    doc.imageUrl
  ))
}
