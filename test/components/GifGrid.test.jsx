import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading incialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        // screen.debug()
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    });

    test('debe de mostrar items cuando se carga las imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);



    });
})
