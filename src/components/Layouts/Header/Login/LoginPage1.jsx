import { Typography, Button } from 'antd';

const LoginPage1 = ({ onClick, onPartnerSignInClick, onUserSignInClick }) => {
	const { Text } = Typography;
	return (
		<>
			<div className="flex flex-row justify-between align-center mb-8">
				<Text className="text-4xl font-extrabold">Sign in for</Text>
				<img
					src="/images/close.png"
					alt="close"
					className="h-4 w-4 cursor-pointer"
					onClick={onClick}
				/>
			</div>
			<Text className="my-8">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo sit perspiciatis, repellat cum voluptate
				cumque?
			</Text>
			<Button
				onClick={onPartnerSignInClick}
				block
				className="py-8 bg-black text-white font-bold text-2xl mb-5 mt-10 flex items-center justify-center"
			>
				Partners
			</Button>
			<Button
				onClick={onUserSignInClick}
				block
				className="py-8 font-bold text-2xl flex items-center justify-center border-black border-2"
			>
				Users
			</Button>
		</>
	);
};

export default LoginPage1;
