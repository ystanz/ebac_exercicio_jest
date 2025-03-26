import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    it('Deve inserir dois comentários corretamente', () => {
        render(<PostComment/>) // Inicializa o componente em um ambiente de teste.
        
        //Busca elementos pelo atributo data-testid.
        const addCommentButton = screen.getByTestId('comment-submit') 
        const addCommentTextArea = screen.getByTestId('comment-input')
        const addCommentList = screen.getByTestId('comment-list')

        fireEvent.change(addCommentTextArea, // Simula a digitação no input (value é o texto do comentário).
            { target: 
                {value: 'Olá, sou o primeiro comentário'}
            })
        fireEvent.click(addCommentButton) // Simula o clique no botão para adicionar o comentário.

        fireEvent.change(addCommentTextArea, 
            { target: 
                {value: 'Olá, sou o segundo comentário'}
            })
        fireEvent.click(addCommentButton)
        
        // Verifica se o texto dos comentários aparece na lista.
        expect(addCommentList).toHaveTextContent('Olá, sou o primeiro comentário')
        expect(addCommentList).toHaveTextContent('Olá, sou o segundo comentário')
        
    })
});