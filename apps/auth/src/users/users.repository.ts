import { AbstractRepository } from "@common";
import { Injectable, Logger } from "@nestjs/common";
import { UserDocument } from "./models/users.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UsersRepository  extends AbstractRepository<UserDocument> {
    protected readonly logger: Logger = new Logger(UsersRepository.name);

    constructor(@InjectModel(UserDocument.name) private readonly userModel: Model<UserDocument>) {
        super(userModel);
    }
}
