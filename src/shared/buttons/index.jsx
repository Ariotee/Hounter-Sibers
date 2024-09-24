export const AccentBtn = ({ children }) => {
	return (
		<button className='bg-green-first py-3 px-6 rounded-[32px]'>
			{children}
		</button>
	)
}

export const PageButton = ({ children }) => {
	return (
		<button className='bg-[rgba(255, 255, 255, 0.1)] border-solid border-[1px] border-border-page-color rounded-[32px] py-2 px-4'>
			{children}
		</button>
	)
}
