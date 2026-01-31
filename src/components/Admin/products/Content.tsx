import { ProductForm, Styles } from "@/app/admin/tools/add/page";
import { List } from "lucide-react";

interface ChildrenProps {
  styles: Styles;
  formData: ProductForm;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;

}


const Content = ({styles , formData , handleChange}:ChildrenProps) => {
  return (
    <div className={styles.card}>
      <div className={`flex items-center gap-2 mb-6 ${styles.sectionDivider}`}>
        <List className="text-violet-400" size={20} />
        <h2 className="text-lg font-semibold text-white">Content & Details</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className={styles.label}>Hero Headline</label>
          <input
            type="text"
            name="heroHeadline"
            placeholder="Unlock Premium Power..."
            value={formData.heroHeadline}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div>
          <label className={styles.label}>Short Description (Card View)</label>
          <textarea
            name="shortDescription"
            rows={2}
            value={formData.shortDescription}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div>
          <label className={styles.label}>Full Introduction</label>
          <textarea
            name="introduction"
            rows={5}
            value={formData.introduction}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
