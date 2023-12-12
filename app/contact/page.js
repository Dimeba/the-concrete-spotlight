// contentful
import { createClient } from 'contentful'

// styles
import styles from './Contact.module.scss'

// components
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import OneColumnBanner from '@/components/OneColumnBanner'

export default async function Contact() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const contact = await client.getEntries({
		content_type: 'contactPage'
	})

	const pageContent = contact.items[0]

	return (
		<main>
			{/* Hero */}
			<section className={styles.hero}>
				{documentToReactComponents(pageContent.fields.topMessage)}

				<Image
					src={'https:' + pageContent.fields.cover.fields.file.url}
					fill
					style={{ zIndex: '-1', objectFit: 'cover' }}
					alt='Image of New York City'
				/>
			</section>

			{/* Form */}
			<section id='contact-form' className={styles.contactForm}>
				<div className={styles.formText}>
					<h2>{pageContent.fields.formTitle}</h2>
					{documentToReactComponents(pageContent.fields.formText)}
				</div>

				<form name='contact' netlify-honeypot='bot-field' data-netlify='true'>
					<input type='hidden' name='form-name' value='contact' />

					<label htmlFor='fullName'>Full Name</label>
					<input
						type='text'
						id='fullName'
						name='fullName'
						placeholder='Full Name'
						required
					/>

					<label htmlFor='howCanWeHelp'>How can we help?</label>
					<select
						id='howCanWeHelp'
						name='howCanWeHelp'
						defaultValue='defaultOption'
					>
						<option disabled hidden value='defaultOption'>
							How can we help?
						</option>
						<option value='I want to be on the show'>
							I want to be on the show
						</option>
						<option value='I want to partner up'>I want to partner up</option>
						<option value='I have a question about your services'>
							I have a question about your services
						</option>
						<option value='Other'>Other</option>
					</select>

					<label htmlFor='emailAddress'>Email Address</label>
					<input
						type='text'
						id='emailAddress'
						name='emailAddress'
						placeholder='Email Address'
						required
					/>

					<label htmlFor='howDidYouHearAboutUs'>
						How did you hear about us?
					</label>

					<select
						id='howDidYouHearAboutUs'
						name='howDidYouHearAboutUs'
						defaultValue='defaultOption'
					>
						<option disabled hidden value='defaultOption'>
							How did you hear about us?
						</option>
						<option value='Recommended by someone'>
							Recommended by someone
						</option>
						<option value='On Social Media'>On Social Media</option>
						<option value='On Google'>On Google</option>
						<option value='Other'>Other</option>
					</select>

					<label htmlFor='message'>Message</label>
					<textarea
						id='message'
						name='message'
						placeholder='Message'
						required
					/>

					<button type='submit'>SEND MESSAGE</button>
				</form>
			</section>

			{/* Banner */}
			<OneColumnBanner
				url='#contact-form'
				buttonText={pageContent.fields.banner.fields.buttonText.toUpperCase()}
				title={pageContent.fields.banner.fields.title}
			/>
		</main>
	)
}
