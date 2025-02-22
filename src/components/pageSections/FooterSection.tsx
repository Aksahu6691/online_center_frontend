import { FooterBackgroundImage } from '@/assets/images';
import CustomSvgIcon from '../common/CustomSvgIcon';
import CustomGoogleMap from '../common/CustomGoogleMap';
import CustomCard from '../common/CustomCard';
import ContactForm from '../ContactForm';
import { useState } from 'react';
import SuccessModal from '../modals/SuccessModal';
import { IContactFormSchema } from '@/types/schema.type';

const FooterSection = () => {
	// INFO: Local States
	const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

	// INFO: Handlers
	const handelSubmit = (values: IContactFormSchema) => {
		console.log('values', values);
		setIsSuccessModalVisible(true);
		setTimeout(() => {
			setIsSuccessModalVisible(false);
		}, 3000);
	};

	// INFO: Render Functions
	const renderContactDetail = () => {
		return (
			<div className="relative pb-28">
				<div className="absolute top-[-20px] w-full flex items-center justify-evenly">
					<CustomCard className="w-60" shadow="sm">
						<div className="flex items-center justify-between gap-3">
							<div className="w-12 h-12 bg-gradient-custom rounded-full flex items-center justify-center">📞</div>
							<div className="flex flex-col w-[70%]">
								<h3 className="text-lg text-night-black font-[900]">PHONE</h3>
								<div className="font-bold text-pink-purple">1234567890</div>
							</div>
						</div>
					</CustomCard>
					<CustomCard className="w-60" shadow="sm">
						<div className="flex items-center justify-between gap-3">
							<div className="w-12 h-12 bg-gradient-custom rounded-full flex items-center justify-center">📞</div>
							<div className="flex flex-col w-[70%]">
								<h3 className="text-lg text-night-black font-[900]">PHONE</h3>
								<div className="font-bold text-pink-purple">1234567890</div>
							</div>
						</div>
					</CustomCard>
				</div>
			</div>
		);
	};

	const renderCopyrightContent = () => {
		return (
			<div className="flex flex-col items-center justify-center gap-5">
				<div className="flex gap-5">
					<CustomSvgIcon Icon="f" />
					<CustomSvgIcon Icon="t" />
					<CustomSvgIcon Icon="in" />
					<CustomSvgIcon Icon="i" />
					<CustomSvgIcon Icon="O" />
				</div>
				<div className="">
					<p className="text-white">
						Copyright © 2025 Magure Inc PVT. Ltd. All Rights Reserved.
						<br />
						Design: <span className="font-bold">Akash Sahu</span>
					</p>
				</div>
			</div>
		);
	};

	return (
		<section
			className="pt-16 pb-10 h-full flex flex-col items-center text-center justify-between"
			style={{
				backgroundImage: `url(${FooterBackgroundImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'bottom',
				backgroundSize: '100%'
			}}
		>
			<div className="flex flex-wrap justify-between w-full px-8 md:px-16">
				<div className="w-full lg:w-[60%]">
					<CustomGoogleMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.8470131047643!2d81.6590628748559!3d21.255757880450947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd6f83c9b421%3A0xca789c0af9b3e705!2sMagure%20Inc!5e1!3m2!1sen!2sin!4v1738324283122!5m2!1sen!2sin" />

					{renderContactDetail()}
				</div>
				<div className="w-full lg:w-[36%] mb-5">
					<ContactForm onSubmit={handelSubmit} />
				</div>
			</div>

			{renderCopyrightContent()}

			{isSuccessModalVisible && (
				<SuccessModal
					isOpen={isSuccessModalVisible}
					message="Data Submitted Successfully! 😊"
					onClose={() => setIsSuccessModalVisible(false)}
				/>
			)}
		</section>
	);
};

export default FooterSection;
