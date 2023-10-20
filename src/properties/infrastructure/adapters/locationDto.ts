import { Location } from "@properties/domain/models";
import { DocumentData } from "firebase/firestore";

export function fromLocationDocToDomain(doc: DocumentData): Location {
  return new Location(
    doc.address,
    doc.neighborhood,
    doc.city,
    doc.country,
  )
}
