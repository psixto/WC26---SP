import { useRouter } from "../hooks/useRouter.jsx"

export default function HomePage() {
    const { navigateTo } = useRouter()

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const searchTerm = formData.get('search')


        const url = searchTerm !== ''
            ? '/search?text=' + encodeURIComponent(searchTerm)
            : '/search'
        
        navigateTo(url)
    }
    
    return (
        <main>
            <section>
                <img src="./background.webp" />
            </section>
        </main>
    )
}