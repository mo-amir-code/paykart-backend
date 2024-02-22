import { NextFunction, Request, Response } from "express";

export interface AuthSignupUserType {
  name: string;
  email: string;
  referredUserReferCode?: string;
  referCode?: string;
  gender: "male" | "female" | "transgender";
  password: string;
  phone?: number;
  address: AuthSignupAddressType;
} 

export interface AuthSignupAddressType{
    country: string;
    state: string;
    city: string;
};

export type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>

export interface CUserDeliveryAddressType{
  userId: string;
  name: string;
  email: string;
  address: string;
  country: string;
  state: string;
  city: string;
  postalCode: number;
  phone: number;
}

export interface CGiftCardType{
  gifterId: string;
  gifterName?: string;
  recieverId: string;
  recieverName: string;
  amount: number;
  message?: string;
  expiry: Date;
}

export interface CUserCardType{
  userId: string;
  cardServiceName: string;
  cardNumber: number;
  expirationDate: Date;
  cvc: number;
  cardOwnerName: string;
}

export interface CRatingAndReviewsType {
  product: string;
  userId: string;
  rate: 0 | 1 | 2 | 3 | 4 | 5;
  title: string;
  description: string;
  images?: string[];
}

export interface CWishlistType{
  userId: string;
  product: string;
}

export interface CProductType{
  ownerId: string;
  title: string;
  description: string | object;
  price: number;
  stock: number;
  colors: string[];
  discount: number;
  thumbnail: string;
  images: string[];
  category: "audio" | "audio and video" | "gadgets";
  subCategory: "wired" | "wireless" | "analog" | "smart";
  highlights: string[];
  warranty: {
    serviceType: string;
    covered: string;
  };
  specifications: object;
  importantNote: string;
}