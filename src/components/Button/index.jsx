import { ContainerButton } from './styles.js';

export function Button({ children, ...props }) {
	return <ContainerButton {...props}>{children}</ContainerButton>;
}
