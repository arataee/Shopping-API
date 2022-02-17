import { Model } from 'sequelize-typescript';
import slugify from 'slugify';

export const slugifyModelKey = <T extends Model>(
	slugKeyName: keyof T,
	baseKeyName: keyof T,
) => {
	return (instance: T) => {
		const slugKey = slugKeyName as string,
			baseKey = baseKeyName as string;
		if (!instance[slugKey] || !instance[slugKey].trim()) {
			instance[slugKey] = slugify(instance[baseKey]);
			return;
		}
		instance[slugKey] = slugify(instance[slugKey]);
		return;
	};
};
