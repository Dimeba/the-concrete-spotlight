// components
import Image from 'next/image'

const ImageContainer = ({
	src,
	className,
	contain,
	priority,
	alt,
	position
}) => {
	return (
		<div className={className} style={{ position: 'relative' }}>
			<Image
				src={src}
				fill
				quality={100}
				sizes='(max-width: 768px) 50vw'
				style={{
					objectFit: contain ? 'contain' : 'cover',
					objectPosition: position ? position : 'auto'
				}}
				priority={priority ? true : false}
				alt={alt ? alt : 'Image'}
				as='img'
			/>
		</div>
	)
}

export default ImageContainer
