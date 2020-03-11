import com.mongodb.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import static com.mongodb.client.model.Filters.eq;

public class HopCon {

  private static boolean insertDoc(MongoCollection<Document> collection, Document doc) {
    try {
      collection.insertOne(doc);
    } catch (MongoException ex) {
      System.out.print("THERE WAS AN ERROR: " + ex.toString());
      return false;
    }
    return true;
  }

  private static Document findDoc(MongoCollection<Document> collection, String key, String value) {
    return collection.find(eq(key, value)).first();
  }
}
