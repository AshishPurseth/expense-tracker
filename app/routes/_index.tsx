import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
    return [{ title: 'Expense Tracker' }, { name: 'description', content: 'Welcome to expense tracker app' }]
}

export default function Index() {
    return (
        <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quia molestiae consequatur quisquam suscipit veritatis repellendus
            beatae sunt accusantium earum non ratione officiis similique odio asperiores sint minima, rem tempore obcaecati quis eligendi? Veritatis
            voluptates officiis nemo iusto sed eveniet autem illo, aspernatur nostrum error deleniti ea fugit commodi totam dolor placeat voluptatem
            obcaecati doloribus quo dolorem adipisci amet enim repellat porro? Quis quia natus accusantium quo at qui unde ex perferendis. Ullam earum
            blanditiis, totam atque doloribus delectus perspiciatis. Iure ipsum placeat velit eligendi fugit cupiditate quibusdam, voluptatum, in
            corporis itaque est maxime culpa, aliquam quaerat? Consectetur, magnam eius.
        </h2>
    )
}
