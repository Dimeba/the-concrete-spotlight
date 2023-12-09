const ArrowButton = ({ color, children, isLarge }) => {
	return (
		<div className='arrowButton'>
			{isLarge ? (
				<h4 style={{ color: color }}>{children}</h4>
			) : (
				<p style={{ color: color }}>{children}</p>
			)}
			<div className='arrow'>
				<hr style={{ borderColor: color }} />
				<div
					style={{
						width: '5px',
						overflow: 'hidden'
					}}
				>
					<div
						style={{
							height: '8px',
							width: '8px',
							backgroundColor: `${color}`,
							transform: 'rotate(45deg) translateY(50%) translateX(-50%)'
						}}
					></div>
				</div>
			</div>
		</div>
	)
}

export default ArrowButton
