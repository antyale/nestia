import * as express from "express";
import * as nest from "@nestjs/common";
import helper from "nestia-helper";

import { IPage } from "../api/structures/IPage";
import { ISaleQuestion } from "../api/structures/ISaleQuestion";

@nest.Controller("consumers/:section/sales/:saleId/questions")
export class ConsumerSaleQuestionsController {
    @nest.Patch()
    public async index(
        @nest.Request() request: express.Request,
        @helper.TypedParam("section", "string") section: string,
        @helper.TypedParam("saleId", "number") saleId: number,
        @nest.Query("ip") ipAddr: string,
        @nest.Query("location.href") href: string,
        @nest.Body() input: ISaleQuestion.IRequest,
    ): Promise<IPage<ISaleQuestion.ISummary>> {
        request;
        section;
        saleId;
        href;
        ipAddr;

        return {
            pagination: {
                page: 1,
                limit: input.limit || 100,
                total_count: 1,
                total_pages: 1,
            },
            data: [
                {
                    writer: "someone",
                    answered: false,
                    id: 1,
                    title: "some-title",
                    hit: 0,
                    created_at: new Date().toString(),
                    updated_at: new Date().toString(),
                },
            ],
        };
    }
}
