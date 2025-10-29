import { useState } from 'react';

import plusIcon from '../../assets/images/plus.png'
import { FormWrapper, FormField, FormLabel, FormInput, FormButton } from './Form.styled';

export const Form = (props: { createNewToDo: Function }) => {
	const [title, setTitle] = useState<string>('');

	const formSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault()
		if (title) {
			props.createNewToDo(title);
			setTitle('');
		}
	};

	return (
		<FormWrapper>
			<FormField action='#' onSubmit={formSubmit}>
				<FormLabel>
					<FormInput
						value={title}
						id='title'
						type='text'						
						onChange={(e) => setTitle(e.target.value)}
					/>
					<FormButton icon={plusIcon}/>
				</FormLabel>
			</FormField>
		</FormWrapper>
	);
};