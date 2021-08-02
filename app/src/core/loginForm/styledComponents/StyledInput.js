import styled from 'styled-components';

const StyledInput = styled.input`
	width: clamp(173px, 300px, 309px);
	height: clamp(40px, 2.6vw, 50px);
	background: #ffffff;
	border: 1px solid #ebeff1;
	box-shadow: 1px 1px 5px rgba(55, 55, 55, 0.09);
	border-radius: 10px;
	text-align: center;

	&::placeholder {
		color: #eeeeee;
	}

	&:-ms-input-placeholder {
		color: #eeeeee;
	}

	&::-ms-input-placeholder {
		color: #eeeeee;
	}

	&:focus {
		outline: none;
		box-shadow: 1px 1px 5px rgba(55, 55, 55, 0.3);
	}

	/* Galaxy Fold responsivness - just because I can xd */
	@media (width: 280px) {
		width: 240px;
		height: 40px;
	}
`;

export default StyledInput;
