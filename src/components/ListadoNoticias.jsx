import { Grid, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

const ListadoNoticias = () => {

    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();

    const totaPaginas = Math.ceil(totalNoticias / 20);

    return (
        <>
            <Typography textAlign={'center'} marginY={5} variant="h3" component={'h2'}>
                Últimas Noticias
            </Typography>

            <Grid
                container
                spacing={2}
            >

                {noticias.map((noticia) => (
                    <Noticia key={noticia.url} noticia={noticia} />
                ))}
            </Grid>

            <Stack
                spacing={2}
                direction={'row'}
                justifyContent="center"
                alignItems={'center'}
                sx={{marginTop: 5}}
            >
                <Pagination count={totaPaginas} color="primary" onChange={handleChangePagina}
                    page={pagina}
                />
            </Stack>

        </>
    )
}

export default ListadoNoticias