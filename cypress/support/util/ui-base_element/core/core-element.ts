/**
 * Interface: Include core element behaviours for lower level imlementation guide
 * @author Lathika MBH
 * Date: 28-04-2024
 */


export interface CoreElements {

    assertVisible(): void;

    assertIsFocused(): void;

    assertText(): void;

    isEnabled(): void;

    isDisabled(): void;
}