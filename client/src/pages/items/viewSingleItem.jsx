import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Carousel } from "antd";

const itemWithSupplierDetails = {
  itemName: "Example Item",
  inventoryLocation: "Warehouse A",
  brand: "Brand X",
  category: "Electronics",
  stockUnit: "pcs",
  unitPrice: 99.99,
  status: "Active",
  itemImages: [
    "https://res.cloudinary.com/dvno4zwok/image/upload/v1730313575/kqtjb7tazzcgicafxnmh.jpg",
    "https://res.cloudinary.com/dvno4zwok/image/upload/v1730313575/lgw32ud1lkfnst8vduck.jpg",
  ],
  supplierName: "rameez2",
  address: "123, new",
  taxNo: "123",
  country: "India",
  mobileNo: "7025875418",
  email: "razeen@gmail.com",
  supplierStatus: "Active",
  supplierNo: "SUP-1",
};

export function ViewSingleItem({ item = itemWithSupplierDetails }) {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Item Details
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-auto px-5 pt-8 pb-14">
          <div className="w-full bg-white flex items-center justify-center">
            <div className="w-full px-12 bg-gray-100 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {item.itemName}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                <div>
                  <div className="mb-5">
                    {item.itemImages && item.itemImages.length > 0 ? (
                      <div>
                        <Carousel arrows className="bg-gray-300 rounded-2xl">
                          {item.itemImages.map((image, index) => (
                            <div key={index}>
                              <img
                                src={image}
                                alt={`Item image ${index + 1}`}
                                className="w-full h-64 object-contain rounded-md"
                              />
                            </div>
                          ))}
                        </Carousel>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-64 bg-gray-200 rounded-md">
                        <p className="text-gray-500">No images available</p>
                      </div>
                    )}
                  </div>
                  <div>
                    <DetailRow
                      label="Inventory Location"
                      value={item.inventoryLocation}
                    />
                    <DetailRow label="Brand" value={item.brand} />
                    <DetailRow label="Category" value={item.category} />
                    <DetailRow label="Stock Unit" value={item.stockUnit} />
                    <DetailRow
                      label="Unit Price"
                      value={`$${item.unitPrice.toFixed(2)}`}
                    />
                    <DetailRow label="Status" value={item.status} />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      Supplier Details
                    </h3>
                    <DetailRow
                      label="Supplier Name"
                      value={item.supplierName}
                    />
                    <DetailRow label="Supplier No" value={item.supplierNo} />
                    <DetailRow label="Address" value={item.address} />
                    <DetailRow label="Tax No" value={item.taxNo} />
                    <DetailRow label="Country" value={item.country} />
                    <DetailRow label="Mobile No" value={item.mobileNo} />
                    <DetailRow label="Email" value={item.email} />
                    <DetailRow label="Supplier Status" value={item.status} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between border-b border-gray-200 py-2">
      <span className="font-medium text-gray-600">{label}:</span>
      <span className="text-gray-800">{value}</span>
    </div>
  );
}

export default ViewSingleItem;
