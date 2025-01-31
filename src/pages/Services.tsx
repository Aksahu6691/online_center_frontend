import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import CustomCard from '@/components/common/CustomCard';
import ScreenWrapper from '@/components/ScreenWrapper';
import { services } from '@/store/data';

const Services = () => {
	const renderServiceCard = () => {
		if (!services) return;

		return services.map(service => (
			<CustomCard
				key={service.id}
				className="h-72 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg p-3"
				shadow="sm"
			>
				<div className="flex flex-col items-center justify-center gap-3 h-full p-5 text-center">
					<img src={service.image} alt="error" />
					<h3 className="text-xl font-bold mb-4">{service.title}</h3>
					<p className="text-sm text-slate-gray">{service.description}</p>
				</div>
			</CustomCard>
		));
	};

	return (
		<ScreenWrapper>
			<CustomBreadcrumb title="Our Service" description="What We Do" />

			<section className="px-16 mb-20">
				<div className="py-14 flex flex-col items-center">
					<h3 className="text-shadow-gray text-lg font-[500]">OUR SERVICES</h3>
					<h2 className="text-3xl font-bold text-night-black">
						Provided <span className="text-pink-purple">Services</span>
					</h2>
				</div>
				<div className="grid grid-col-2 lg:grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4 gap-6">
					{renderServiceCard()}
				</div>
			</section>
		</ScreenWrapper>
	);
};

export default Services;
