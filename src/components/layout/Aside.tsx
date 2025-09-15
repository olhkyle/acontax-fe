const Aside = () => {
	return (
		<div className="relative">
			<aside className="bg-muted border-muted fixed left-0 hidden h-full w-14 flex-col overflow-y-auto overflow-x-hidden border-r md:sticky md:flex lg:w-56 lg:px-3 max-h-screen">
				<div className="flex h-full flex-col justify-between py-3 lg:pt-4">
					<header>
						<div>Kyle Kwon</div>
					</header>
					<nav className="mt-2 flex-1 md:px-2 lg:mt-4 lg:px-0">
						<ul>
							<li>문서 작성하기</li>
							<li>문서 발행목록</li>
							<li>엑셀 가져오기</li>
						</ul>
					</nav>
					<button type="button">테스트</button>
				</div>
			</aside>
		</div>
	);
};

export default Aside;
