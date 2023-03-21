use zoo

db.animals.findOne({ _id: ObjectId('64188094fd62d84c56c8a24f') })

db.animals.updateOne(
    { _id: ObjectId('64188094fd62d84c56c8a24f') },
    { $set: { name: 'Pia' } }
)

db.animals.deleteOne({ _id: ObjectId('64188094fd62d84c56c8a24f') })