
const FormatPrice = ({myprice}) => {
    return Intl.NumberFormat("en-IN", {
        style: "currency", 
        currency: "INR",
        maximumFractionDigits: 2,
    }).format(myprice / 100);
       
}
export default FormatPrice;