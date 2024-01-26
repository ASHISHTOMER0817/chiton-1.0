import Image from "next/image";
import heart from "@/../public/heart.svg";

interface productLayoutTypes {
	galaryDetails: string,
      diffImage: string,
	alternate: string,
      diffAlternate: string,
	name: string,
      price: string,
	colorDescription:string
	allArticleImage:string
	description: string
	measurements: string
	lengthCollection: string
	sleeveLength: string
	fits: string,
	styleCollection: string,
	presentationTypes: string,
	color: string,
	pattern: string,
	Concept: string,
	whitePrice: string,
	articleCountryOfProduction: string,





	compositions: string
	aggregatedSustainabilityCompositions: string
	materialDetailsName: string
	materialDetailsDescription: string
	
	
	
	careInstructions: string

}

const ProductLayout: React.FC<productLayoutTypes> = ({
	galaryDetails,
	name,
      price,
	colorDescription,
	allArticleImage,
	description,
	measurements,
	lengthCollection,
	sleeveLength,
	fits,
	styleCollection,
	presentationTypes,
	color,
	pattern,
	Concept,
	whitePrice,
	articleCountryOfProduction,




	compositions,
	aggregatedSustainabilityCompositions,
	materialDetailsName,
	materialDetailsDescription,



	careInstructions


}) => {

	const allDetails = [
		{
			heading: 'size:',
			value: measurements,
		},
		{
			heading: 'Length:',
			value: lengthCollection,
		},
		{
			heading: 'Sleeve Length:',
			value: sleeveLength,
		},
		{
			heading: 'fit:',
			value: fits,
		},
		{
			heading: 'Neckline:',
			value: styleCollection,
		},
		{
			heading: 'Description:',
			value: color, pattern
		},
		{
			heading: 'Concept:',
			value: Concept,
		},
		{
			heading: 'Price (MRP):',
			value: `${whitePrice} incl. of all taxes`,
		},
		{
			heading: 'Country of production:',
			value: articleCountryOfProduction,
		},
		{
			heading: 'Common generic name:',
			value: presentationTypes,
		},
		{
			heading: 'Price (MRP):',
			value: whitePrice,
		},
		{
			heading: 'Price (MRP):',
			value: whitePrice,
		},
	]


	


	return (
      	<>
			<Image src={galaryDetails} alt={"image..."} />
			<div>
				<div>
					<h4>{name}</h4>
					<Image src={heart} alt={"icon"} />
				</div>
                        <p>MRP inclusive of all taxes</p>
                        <h3>{price}</h3>
				<div>{colorDescription}</div>
				<Image src={allArticleImage} alt={"image..."}/>
				<div>

				<Image src={""} alt={""}/> <p>Delivery time: 2-7 days</p>
				<button>Add</button>
				</div>
				<p>Delivery and Payment</p>

				<Image src={""} alt={""}/>
				<p>(10) reviews</p>
				<button onClick={}>Description and Fit
				<div>
				<p>{description}</p>

				<h6>Size:</h6>
				{allDetails.map(({heading, value}) => {
					return (
						<>
						<span className="font-medium">{heading}</span>
						<p>{value}</p>
						</>
					)
				})}
				
				</div>
				</button>
				
				<button>Materials
				
				<div>
					<h4>Composition</h4>
					<p>{compositions} </p>
					<span className="font-medium"> Material:  </span> <p>{aggregatedSustainabilityCompositions}</p>
					<h4>Materials in this product explained</h4>
					<h6>{materialDetailsName} </h6>
					<p>{materialDetailsDescription} </p>
				</div>

				</button>

				<button>Care Guide 
					<div>
					<h4>Care instructions</h4>
					<ul>
						<li>{careInstructions} </li>
					</ul>
					</div>
				</button>
				
			</div>
		</> 
            
	);
};

export default ProductLayout;
