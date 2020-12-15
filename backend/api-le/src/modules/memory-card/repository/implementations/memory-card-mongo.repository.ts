import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { MemoryMeasurement } from 'vm';
import { MemoryCard } from "../../schemas/memoryCard.schema";
import { IMemoryCardRepository } from "../i-memory-card.repository";

export class MemoryCardMongoRepository implements IMemoryCardRepository {
    
    constructor(
        @InjectModel(MemoryCard.name)
        private memoryCardModel: Model<MemoryCard>,
    ) {}
    
    create(dto: MemoryCard) {
        const newComent = new this.memoryCardModel(dto);
        return newComent.save();
    }

    getAll() {
        return this.memoryCardModel.find()
    }

    getById(id: string) {
        return this.memoryCardModel.findById(id)
    }

    update(id: string, dto: MemoryCard) {
        return this.memoryCardModel.updateOne(
            {_id: id},
            {
                word: dto.word,
                meanings: dto.meanings,
                phrases: dto.phrases
            }
        )
    }

    delete(id: string) {
        return this.memoryCardModel.deleteOne(
            {_id: id},
        )
    }
}