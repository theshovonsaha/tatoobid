// Portfolio Schema
const PortfolioSchema = {
  artist_id: UUID,
  works: [{
    image_url: String,
    description: String,
    style_tags: [String],
    created_at: Date,
    likes_count: Number,
    comments: [{
      user_id: UUID,
      comment: String,
      created_at: Date
    }]
  }],
  specializations: [String],
  styles: [String]
}

// Messages Schema
const MessageSchema = {
  conversation_id: UUID,
  sender_id: UUID,
  receiver_id: UUID,
  message: String,
  created_at: Date,
  read_at: Date
} 