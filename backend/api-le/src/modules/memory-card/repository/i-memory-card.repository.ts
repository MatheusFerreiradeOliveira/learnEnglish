import { MemoryMeasurement } from "vm";
import { MemoryCard } from "../schemas/memoryCard.schema";

export interface IMemoryCardRepository {
    create(dto: MemoryCard)
    getAll()
    getById(id: string)
    update(id: string, dto: MemoryCard)
    delete(id: string)
}