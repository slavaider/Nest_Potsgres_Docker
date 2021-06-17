import {MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class migrate1623909923929 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "board",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "title",
                    type: "varchar",
                }
            ]
        }), true)
        await queryRunner.createTable(new Table({
            name: "column",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "order",
                    type: "number",
                }
            ]
        }), true)
        await queryRunner.createTable(new Table({
            name: "task",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "order",
                    type: "number",
                },
                {
                    name:"description",
                    type:"varchar"
                },
                {
                    name:"boardId",
                    type:"varchar",
                    isNullable:true
                },
                {
                    name:"columnId",
                    type:"varchar",
                    isNullable:true
                }, {
                    name:"userId",
                    type:"varchar",
                    isNullable:true
                }
            ]
        }), true)
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "login",
                    type: "varchar",
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "password",
                    type: "varchar",
                }
            ]
        }), true)
        await queryRunner.createForeignKey("board", new TableForeignKey({
            columnNames: ['columns'],
            referencedTableName: 'column',
            referencedColumnNames: ['column']
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const board = await queryRunner.getTable("board");
        const foreignKey = board?.foreignKeys.find(fk => fk.columnNames.indexOf("columns") !== -1);
        await queryRunner.dropForeignKey("board", foreignKey as TableForeignKey);

        await queryRunner.dropColumn("board", "columns");
        await queryRunner.dropTable("board");

        await queryRunner.dropTable("task");
        await queryRunner.dropTable("user");
    }

}
