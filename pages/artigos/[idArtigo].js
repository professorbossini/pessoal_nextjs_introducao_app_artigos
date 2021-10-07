import { useRouter } from "next/router"
const DetalhesPage = () => {
    const router = useRouter()
    //utilizamos o placeholder que faz
    //parte do arquivo aqui, veja
    console.log (router.query.idArtigo)
    return <h1>Detalhes</h1>
}
export default DetalhesPage