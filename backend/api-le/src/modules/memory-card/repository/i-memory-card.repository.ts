import { MemoryCard } from "../schemas/memoryCard.schema";

export interface IMemoryCardRepository {
    create(dto: MemoryCard)
    getAll()
    getById(id: string)
    delete(id: string)
}