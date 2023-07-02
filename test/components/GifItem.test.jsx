import { GifItem } from "../../src/components";
import { render, screen } from "@testing-library/react";

describe('Prueba en <GifItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch-man/saitama';

    test('debe de hacer el match en el snapshot', () => {
        const { container } = render(
            <GifItem
                title={ title }
                url={ url }
            />
        );

        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(
            <GifItem
                title={ title }
                url={ url }
            />
        );

        // screen.debug();
        // console.log( screen.getByRole('img') );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('debe de mostrar el titulo en el componente', () => {
        render(
            <GifItem
                title={ title }
                url={ url }
            />
        );

        expect( screen.getByText( title ) ).toBeTruthy();
    });
});