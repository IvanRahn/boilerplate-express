const HomePageController = require("./../../../controllers/homepage_controller")

describe("Homepage controller", () => {
    test("calls render homepage", () => {
        const res = {
            render: jest.fn()
        };
        HomePageController.index(null, res);
        expect(res.render).toBeCalledTimes(1);
    });
})