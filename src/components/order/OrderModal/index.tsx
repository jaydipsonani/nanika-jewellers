import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { Textarea } from "@/components/ui/Textarea";
import { CreditCard, Banknote, Wallet, MapPin, Phone, User } from "lucide-react";
import { toast } from "sonner";
import styles from "./OrderModal.module.scss";

interface OrderModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
    price: number;
}

const OrderModal = ({ isOpen, onClose, productName, price }: OrderModalProps) => {
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.fullName || !formData.phone || !formData.address || !formData.city || !formData.pincode) {
            toast.error("Please fill all required fields");
            return;
        }

        toast.success("Order placed successfully! We'll contact you shortly.");
        onClose();
        setFormData({
            fullName: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            pincode: "",
        });
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className={styles.dialogContent}>
                <DialogHeader>
                    <DialogTitle className={styles.dialogTitle}>
                        Complete Your Order
                    </DialogTitle>
                    <DialogDescription>
                        {productName} - ₹{price.toLocaleString()}
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className={styles.form}>
                    {/* Payment Method */}
                    <div className={styles.section}>
                        <Label>Payment Method</Label>
                        <RadioGroup
                            value={paymentMethod}
                            onValueChange={setPaymentMethod}
                            className={styles.grid3}
                        >
                            {[
                                { id: "card", icon: CreditCard, label: "Card" },
                                { id: "upi", icon: Wallet, label: "UPI" },
                                { id: "cod", icon: Banknote, label: "COD" },
                            ].map((method) => (
                                <Label
                                    key={method.id}
                                    htmlFor={method.id}
                                    className={styles.paymentCard}
                                    data-active={paymentMethod === method.id}
                                >
                                    <RadioGroupItem value={method.id} id={method.id} className="sr-only" />
                                    <method.icon className={styles.paymentIcon} />
                                    <span className={styles.paymentText}>{method.label}</span>
                                </Label>
                            ))}
                        </RadioGroup>
                    </div>

                    {/* Shipping Address */}
                    <div className={styles.section}>
                        <Label className={styles.labelWithIcon}>
                            <MapPin className="w-4 h-4 text-gold" />
                            Shipping Address
                        </Label>

                        <div className={styles.gridGap4}>
                            <div className={styles.gridGap2}>
                                <Label htmlFor="fullName">Full Name *</Label>
                                <div className={styles.inputWrapper}>
                                    <User />
                                    <Input
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                        className={styles.inputWithIcon}
                                    />
                                </div>
                            </div>

                            <div className={styles.gridGap2}>
                                <Label htmlFor="phone">Phone Number *</Label>
                                <div className={styles.inputWrapper}>
                                    <Phone />
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter phone number"
                                        className={styles.inputWithIcon}
                                    />
                                </div>
                            </div>

                            <div className={styles.gridGap2}>
                                <Label htmlFor="address">Address *</Label>
                                <Textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder="House no., Building, Street, Area"
                                    className={styles.inputNormal}
                                />
                            </div>

                            <div className={styles.grid2}>
                                <div className={styles.gridGap2}>
                                    <Label htmlFor="city">City *</Label>
                                    <Input
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        placeholder="City"
                                        className={styles.inputNormal}
                                    />
                                </div>
                                <div className={styles.gridGap2}>
                                    <Label htmlFor="state">State</Label>
                                    <Input
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        placeholder="State"
                                        className={styles.inputNormal}
                                    />
                                </div>
                            </div>

                            <div className={styles.gridGap2}>
                                <Label htmlFor="pincode">Pincode *</Label>
                                <Input
                                    id="pincode"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleInputChange}
                                    placeholder="Enter pincode"
                                    className={`${styles.inputNormal} w-1/2`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className={styles.summary}>
                        <div className={styles.summaryRow}>
                            <span className={styles.label}>Subtotal</span>
                            <span className={styles.value}>₹{price.toLocaleString()}</span>
                        </div>
                        <div className={styles.summaryRow}>
                            <span className={styles.label}>Shipping</span>
                            <span className={styles.free}>Free</span>
                        </div>
                        <div className={styles.totalRow}>
                            <span className={styles.value}>Total</span>
                            <span className={styles.totalValue}>₹{price.toLocaleString()}</span>
                        </div>
                    </div>

                    <Button type="submit" variant="gold" className="w-full">
                        Place Order
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default OrderModal;
