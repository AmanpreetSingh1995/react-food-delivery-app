import React from "react";
import { MdShoppingBasket } from "react-icons/md";

const RowContainer = ({ flag }) => {
	return (
		<div
			className={`w-full my-12 ${
				flag ? "overflow-x-scroll" : "overflow-x-hidden"
			}`}
		>
			<div className="w-300 md:w-225 h-auto my-12 backdrop-blur-lg">
				<div className="w-full flex items-center justify-between">
					<img
						src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-b324d.appspot.com/o/Images%2F1676788289688-c1.png?alt=media&token=541b3815-65ba-4e0c-9e98-555ec5bccab6"
						alt=""
						className="w-40 -mt-8"
					/>
					<div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
						<MdShoppingBasket className="text-white" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RowContainer;
