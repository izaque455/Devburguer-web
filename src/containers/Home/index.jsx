import { CategoryCarousel } from '../../components/CategoryCarousel/index.jsx';
import { Banner, Container, Content } from './styled';

export function Home() {
	return (
		<main>
			<Banner>
				<h1>Bem-Vindo!</h1>
			</Banner>
			<Container>
				<Content>
					<CategoryCarousel />
					<div>Carrosel Produto</div>
				</Content>
			</Container>
		</main>
	);
}
