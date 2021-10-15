import * as use_theme from "@src/theme/use-theme"
// @ponicode
describe("use_theme.useTheme", () => {
    test("0", () => {
        let callFunction: any = () => {
            use_theme.useTheme()
        }
    
        expect(callFunction).not.toThrow()
    })
})
