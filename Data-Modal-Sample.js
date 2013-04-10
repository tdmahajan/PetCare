db.categories.insert([
{ _id:    "CAT100"
, name:   "Dogs"
, parent: []
},
{ _id:    "CAT101"
, name:   "Food"
, parent: ["CAT100"]
, attributes: ["ATR100"]
}]);

db.attributes.insert([
{ _id:    "ATR100"
, name:   "FoodType"
, displayName: "Type"
, definition: "Indicates, with reference to the product is of Dry, Wet and Treats."
, values: [{code: "ATRV100", value: "Dry"},{code: "ATRV101", name: "Wet"},{code: "ATRV102", name: "Treats"}]
}
]);

db.tradeitems.insert([{SKUName:    "PEDIGREE® Adult Complete Nutrition for Dogs"
, SKUDescription: "PEDIGREE® Adult Complete Nutrition for Dogs has been formulated to give mature dogs all the energy and nourishment they need "
+"to continue living life to its fullest. It's packed with vitamins, zinc and Omega 6 to help keep adult dogs looking like best-in-show"
+"winners, and has leading levels of antioxidant vitamin E to keep their immune systems young at heart. Plus, our special blend of fiber"
+"helps support or promote healthy digestion to keep yard patrol in control, and our oral care kibble helps keep teeth clean."
, GTIN: "12345678901234"
, Categories: ["CAT100","CAT101"]
, Attributes: [{Attribute: "ATR100",Value:"ATRV100"]
, BrandId:    "BR0001"
, Ingredients: "GROUND WHOLE CORN, MEAT AND BONE MEAL, CORN GLUTEN MEAL, ANIMAL FAT (PRESERVED WITH BHA/CITRIC ACID), SOYBEAN MEAL, GROUND WHOLE WHEAT,"
+"BREWERS RICE, DRIED PLAIN BEET PULP, NATURAL FLAVOR, SALT, VEGETABLE OIL ([SOURCE OF LINOLEIC ACID] PRESERVED WITH BHA/BHT), POTASSIUM CHLORIDE, VITAMINS"
+"(CHOLINE CHLORIDE, a-TOCOPHEROL ACETATE [SOURCE OF VITAMIN E], NIACIN, BIOTIN, d-CALCIUM PANTOTHENATE, RIBOFLAVIN SUPPLEMENT [VITAMIN B2], PYRIDOXINE HYDROCHLORIDE,"
+"VITAMIN A SUPPLEMENT, VITAMIN B12 SUPPLEMENT, THIAMINE MONONITRATE [VITAMIN B1], VITAMIN D3 SUPPLEMENT) MINERALS (ZINC SULFATE, ZINC PROTEINATE, COPPER SULFATE, "
+"POTASSIUM IODIDE, COPPER PROTEINATE, MANGANESE PROTEINATE), ADDED FD&C COLORS (RED 40, YELLOW 5, BLUE 2)"
, NutritionValue: "Fat 100%"
, Content:   "1"
, UOM:       "Kg"
, PackagingType: "Bag"
, TradeItemOptionId: "OP1001"
, RelatedTradeItemId: "REL1001"
, attributes: [{AttrId: "ATR100", value: "Dry"} ]
, WebImageUrl: {thumbnail: "adult-complete-nutrition-for-dogs.jpg", small: "adult-complete-nutrition-for-dogs.jpg", large: ""}
, MobileImageUrl: {thumbnail: "", small: "", large: ""}
, OurPrice: 450
, MRP: 550
, CompetitorPrice: [{PartyName: "Zopnow", price: 550}]
, Rating:"0.2" }]);

db.tradeitems.insert([
{ SKUName:    "PEDIGREE® Adult Complete Nutrition for Dogs"
, SKUDescription: "PEDIGREE® Adult Complete Nutrition for Dogs has been formulated to give mature dogs all the energy and nourishment they need "
+"to continue living life to its fullest. It's packed with vitamins, zinc and Omega 6 to help keep adult dogs looking like best-in-show"
+"winners, and has leading levels of antioxidant vitamin E to keep their immune systems young at heart. Plus, our special blend of fiber"
+"helps support or promote healthy digestion to keep yard patrol in control, and our oral care kibble helps keep teeth clean."
, GTIN: "12345678901234"
, Categories: ["CAT100","CAT101"]
, Attributes: [{Attribute: "ATR100",Value:"ATRV100"]
, BrandId:    "BR0001"
, Ingredients: "GROUND WHOLE CORN, MEAT AND BONE MEAL, CORN GLUTEN MEAL, ANIMAL FAT (PRESERVED WITH BHA/CITRIC ACID), SOYBEAN MEAL, GROUND WHOLE WHEAT,"
+"BREWERS RICE, DRIED PLAIN BEET PULP, NATURAL FLAVOR, SALT, VEGETABLE OIL ([SOURCE OF LINOLEIC ACID] PRESERVED WITH BHA/BHT), POTASSIUM CHLORIDE, VITAMINS"
+"(CHOLINE CHLORIDE, a-TOCOPHEROL ACETATE [SOURCE OF VITAMIN E], NIACIN, BIOTIN, d-CALCIUM PANTOTHENATE, RIBOFLAVIN SUPPLEMENT [VITAMIN B2], PYRIDOXINE HYDROCHLORIDE,"
+"VITAMIN A SUPPLEMENT, VITAMIN B12 SUPPLEMENT, THIAMINE MONONITRATE [VITAMIN B1], VITAMIN D3 SUPPLEMENT) MINERALS (ZINC SULFATE, ZINC PROTEINATE, COPPER SULFATE, "
+"POTASSIUM IODIDE, COPPER PROTEINATE, MANGANESE PROTEINATE), ADDED FD&C COLORS (RED 40, YELLOW 5, BLUE 2)"
, NutritionValue: "Fat 100%"
, Content:   "2.5"
, UOM:       "Kg"
, PackagingType: "Bag"
, TradeItemOptionId: "OP1001"
, RelatedTradeItemId: "REL1001"
, attributes: [{AttrId: "ATR100", value: "Dry"} ]
, WebImageUrl: {thumbnail: "adult-complete-nutrition-for-dogs.jpg", small: "adult-complete-nutrition-for-dogs.jpg", large: ""}
, MobileImageUrl: {thumbnail: "", small: "", large: ""}
, OurPrice: 1450
, MRP: 1550
, CompetitorPrice: [{PartyName: "Zopnow", price: 1550}]
, Rating:"0.1"
}]);

db.tradeitems.insert([
{ SKUName:    "PEDIGREE® Adult Complete Nutrition for Dogs"
, SKUDescription: "PEDIGREE® Adult Complete Nutrition for Dogs has been formulated to give mature dogs all the energy and nourishment they need "
+"to continue living life to its fullest. It's packed with vitamins, zinc and Omega 6 to help keep adult dogs looking like best-in-show"
+"winners, and has leading levels of antioxidant vitamin E to keep their immune systems young at heart. Plus, our special blend of fiber"
+"helps support or promote healthy digestion to keep yard patrol in control, and our oral care kibble helps keep teeth clean."
, GTIN: "12345678901234"
, Categories: ["CAT100","CAT101"]
, Attributes: [{Attribute: "ATR100",Value:"ATRV100"]
, BrandId:    "BR0001"
, Ingredients: "GROUND WHOLE CORN, MEAT AND BONE MEAL, CORN GLUTEN MEAL, ANIMAL FAT (PRESERVED WITH BHA/CITRIC ACID), SOYBEAN MEAL, GROUND WHOLE WHEAT,"
+"BREWERS RICE, DRIED PLAIN BEET PULP, NATURAL FLAVOR, SALT, VEGETABLE OIL ([SOURCE OF LINOLEIC ACID] PRESERVED WITH BHA/BHT), POTASSIUM CHLORIDE, VITAMINS"
+"(CHOLINE CHLORIDE, a-TOCOPHEROL ACETATE [SOURCE OF VITAMIN E], NIACIN, BIOTIN, d-CALCIUM PANTOTHENATE, RIBOFLAVIN SUPPLEMENT [VITAMIN B2], PYRIDOXINE HYDROCHLORIDE,"
+"VITAMIN A SUPPLEMENT, VITAMIN B12 SUPPLEMENT, THIAMINE MONONITRATE [VITAMIN B1], VITAMIN D3 SUPPLEMENT) MINERALS (ZINC SULFATE, ZINC PROTEINATE, COPPER SULFATE, "
+"POTASSIUM IODIDE, COPPER PROTEINATE, MANGANESE PROTEINATE), ADDED FD&C COLORS (RED 40, YELLOW 5, BLUE 2)"
, NutritionValue: "Fat 100%"
, Content:   "1"
, UOM:       "Kg"
, PackagingType: "Bag"
, TradeItemOptionId: "OP1001"
, RelatedTradeItemId: "REL1001"
, attributes: [{AttrId: "ATR100", value: "Dry"} ]
, WebImageUrl: {thumbnail: "adult-complete-nutrition-for-dogs.jpg", small: "adult-complete-nutrition-for-dogs.jpg", large: ""}
, MobileImageUrl: {thumbnail: "", small: "", large: ""}
, OurPrice: 2450
, MRP: 2550
, CompetitorPrice: [{PartyName: "Zopnow", price: 2550}]
, Rating:"0.3"
}]);

db.tradeitems.insert([
{ SKUName:    "PEDIGREE® Adult Complete Nutrition for Dogs"
, SKUDescription: "PEDIGREE® Adult Complete Nutrition for Dogs has been formulated to give mature dogs all the energy and nourishment they need "
+"to continue living life to its fullest. It's packed with vitamins, zinc and Omega 6 to help keep adult dogs looking like best-in-show"
+"winners, and has leading levels of antioxidant vitamin E to keep their immune systems young at heart. Plus, our special blend of fiber"
+"helps support or promote healthy digestion to keep yard patrol in control, and our oral care kibble helps keep teeth clean."
, GTIN: "12345678901234"
, Categories: ["CAT100","CAT101"]
, Attributes: [{Attribute: "ATR100",Value:"ATRV100"}]
, BrandId:    "BR0001"
, Ingredients: "GROUND WHOLE CORN, MEAT AND BONE MEAL, CORN GLUTEN MEAL, ANIMAL FAT (PRESERVED WITH BHA/CITRIC ACID), SOYBEAN MEAL, GROUND WHOLE WHEAT,"
+"BREWERS RICE, DRIED PLAIN BEET PULP, NATURAL FLAVOR, SALT, VEGETABLE OIL ([SOURCE OF LINOLEIC ACID] PRESERVED WITH BHA/BHT), POTASSIUM CHLORIDE, VITAMINS"
+"(CHOLINE CHLORIDE, a-TOCOPHEROL ACETATE [SOURCE OF VITAMIN E], NIACIN, BIOTIN, d-CALCIUM PANTOTHENATE, RIBOFLAVIN SUPPLEMENT [VITAMIN B2], PYRIDOXINE HYDROCHLORIDE,"
+"VITAMIN A SUPPLEMENT, VITAMIN B12 SUPPLEMENT, THIAMINE MONONITRATE [VITAMIN B1], VITAMIN D3 SUPPLEMENT) MINERALS (ZINC SULFATE, ZINC PROTEINATE, COPPER SULFATE, "
+"POTASSIUM IODIDE, COPPER PROTEINATE, MANGANESE PROTEINATE), ADDED FD&C COLORS (RED 40, YELLOW 5, BLUE 2)"
, NutritionValue: "Fat 100%"
, Content:   "6"
, UOM:       "Kg"
, PackagingType: "Bag"
, TradeItemOptionId: "OP1001"
, RelatedTradeItemId: "REL1001"
, attributes: [{AttrId: "ATR100", value: "Dry"} ]
, WebImageUrl: {thumbnail: "adult-complete-nutrition-for-dogs.jpg", small: "adult-complete-nutrition-for-dogs.jpg", large: ""}
, MobileImageUrl: {thumbnail: "", small: "", large: ""}
, OurPrice: 3450
, MRP: 3550
, CompetitorPrice: [{PartyName: "Zopnow", price: 3550}]
, Rating:"0.4"
}]);



{ "_id" : ObjectId("51629daa0607a6b7d56eb0e1") }
{ "_id" : ObjectId("51629dec0607a6b7d56eb0e2") }
{ "_id" : ObjectId("51629e160607a6b7d56eb0e3") }


db.tradeItemOptions.insert([
{ _id: "OP1001"
 ,options: [ {tradeItemId: "5162be6a3dfb32156ad46e98", content: 1, uom: "Kg", PackagingType: "Bag"},
             {tradeItemId: "5162be9c3dfb32156ad46e99", content: 2.5, uom: "Kg", PackagingType: "Bag"},
             {tradeItemId: "5162bead3dfb32156ad46e9a", content: 5, uom: "Kg", PackagingType: "Bag"}
	   ]
}]);

db.RelatedTradeItems.insert([
{ _id: "REL1001"
  tradeItemIds: [ "51629daa0607a6b7d56eb0e1", ]
}
]);

db.brands.insert([
{_id:"BR1001"
,BrandName:"Pedigree"
}]);

db.persons.insert([
{ PersonName: {Title: "Mr."
              ,FirstName: "Rameshwar"
              ,MiddleName: "Laxhman"
              ,LastName: "Kumar"
              ,Alias: "Ram"
		      }
 , Addresses: [{purpose: {Usage: "Home", ValidFrom: "2000-01-01T00:00:00", ValidTo: "2000-03-31T00:00:00"}
               ,Country: "India"
               ,AdministrativeArea: "Pimpri Chinchwad"
               ,Locality: "Wakad"
			   ,Thoroughfare: "Sr.No. 169, HISSA 3 to 6"
			   ,Premises: {BuildingName: "The Island", FlatNo: "A-602"}
			   ,PostCode: 411059
			   ,LocationByCoordinate: {latitude: 123455, longitude: 123345}
		       },
			   {purpose: {Usage: "Office", ValidFrom: "2000-01-01T00:00:00", ValidTo: "2000-03-31T00:00:00"}
			   ,Country: "India"
			   ,AdministrativeArea: "Pimpri Chinchwad"
			   ,Locality: "Wakad"
			   ,Thoroughfare: "Sr.No. 169, HISSA 3 to 6"
			   ,Premises: {BuildingName: "The Island", FlatNo: "A-602"}
			   ,PostCode: 411059
			   ,LocationByCoordinate: {latitude: 123455, longitude: 123345}
		       }]
  , Account: {acountRole: "Consumer", accountId: 123456, userid: 122434, password: "1dgedg456", fbProfileId: "1223455"}
  , ContactNumbers: [ {type: "Landline", CountryCode: "+91", AreaCode: "20", LocalNumber: "1234445"}
                     ,{type: "Mobile", CountryCode: "+91", AreaCode: "20", LocalNumber: "1234445456"}
				    ]
  , ElectronicAddressIdentifiers: [{Type: "EMAIL" Usage="Business", Value: "ram@ram.com.au"}
                                  ,{Type: "EMAIL" Usage="Personal", Value: "rk@aol.com.au"}
							      ]
  , Identifier: [ {Type: "UUID", Value: "1233444565"}]
}
]);

db.mywishlist.insert([
{ PartyId: 1001234
, List : [ {tradeItemId: "10304dgf", Qty: 1}, {tradeItemId: "10304dgf", Qty: 1}]
},
{ PartyId: 1001235
, List : [ {tradeItemId: "10304dgf", Qty: 1}, {tradeItemId: "10304dgf", Qty: 1}]
}
]);

db.orders.insert([
{ PartyId: 1001234
, Lines : [{tradeItemId: "10304dgf", OrderedQuantity: 1, ShippedQty: 0}
          ,{tradeItemId: "10304dgl", OrderedQuantity: 1, ShippedQty: 0}
          ]
}
]);

db.invoices.insert([
{ PartyId: 1001234
, List : [ {tradeItemId: "10304dgf", Qty: 1}, {tradeItemId: "10304dgf", Qty: 1}]
},
{ PartyId: 1001235
, List : [ {tradeItemId: "10304dgf", Qty: 1}, {tradeItemId: "10304dgf", Qty: 1}]
}
]);
