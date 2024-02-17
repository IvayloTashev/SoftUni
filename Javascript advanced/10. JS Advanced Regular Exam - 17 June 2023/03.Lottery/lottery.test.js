import { assert } from "chai";
import { lottery } from "./Lottery.js";

describe("test suits", function() {
    
    describe("test buyLotteryTicket functionality", function() {
        it("test with invalid input", () => {
            assert.throws(() => lottery.buyLotteryTicket("1", 1, true), "Invalid input!");
            assert.throws(() => lottery.buyLotteryTicket(1, "1", true), "Invalid input!");
            assert.throws(() => lottery.buyLotteryTicket(1, 1, 1), "Invalid input!");
            assert.throws(() => lottery.buyLotteryTicket([1], [1], [true]), "Invalid input!");
            assert.throws(() => lottery.buyLotteryTicket([], {}, true), "Invalid input!");
        });

        it("test with false boolean", () => {
            assert.throws(() => lottery.buyLotteryTicket(1, 1, false), "Unable to buy lottery ticket!");
        });

        it("test with valid data", () => {
            assert.equal(lottery.buyLotteryTicket(2, 1, true), "You bought 1 tickets for 2$." )
            assert.equal(lottery.buyLotteryTicket(1, 1, true), "You bought 1 tickets for 1$." )
            assert.equal(lottery.buyLotteryTicket(2, 2, true), "You bought 2 tickets for 4$." )
        });
        
    });

    describe("test checkTicket functionality", function() {
        it("test with invalid input", () => {
            assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]), "Invalid input!");
            assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5]), "Invalid input!");
            assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6]), "Invalid input!");
            assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7]), "Invalid input!");
            assert.throws(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], "123"), "Invalid input!");
            assert.throws(() => lottery.checkTicket("123", [1, 2, 3, 4, 5, 6]), "Invalid input!");
        });

        it("test winning case 3-5", () => {
            assert.equal(lottery.checkTicket([1, 2, 3, 7, 7, 7], [1, 2, 3, 4, 5, 6]), "Congratulations you win, check your reward!");
            assert.equal(lottery.checkTicket([1, 2, 3, 4, 7, 7], [1, 2, 3, 4, 5, 6]), "Congratulations you win, check your reward!");
            assert.equal(lottery.checkTicket([1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5, 6]), "Congratulations you win, check your reward!");
        });

        it("test winning jackpot", () => {
            assert.equal(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]), "You win the JACKPOT!!!");
        });

    });

    describe("test secondChance functionality", function() {
        it("test with invalid input", () => {
            assert.throws(() => lottery.secondChance("1", [1, 2, 3, 4, 5, 6]), "Invalid input!");
            assert.throws(() => lottery.secondChance([1], [1, 2, 3, 4, 5, 6]), "Invalid input!");
            assert.throws(() => lottery.secondChance([1], [1, 2, 3, 4, 5]), "Invalid input!");
            assert.throws(() => lottery.secondChance(1, "1, 2, 3, 4, 5, 6"), "Invalid input!");
        });

        it("test winning case", () => {
            assert.equal(lottery.secondChance(1, [1, 2, 3, 4, 5, 6]), "You win our second chance prize!")
        });

        it("test losing case", () => {
            assert.equal(lottery.secondChance(7, [1, 2, 3, 4, 5, 6]), "Sorry, your ticket didn't win!")
        });

    });



});